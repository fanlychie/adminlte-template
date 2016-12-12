package org.fanlychie.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data")
public class DataController {

	private static final List<Person> STORAGE = new ArrayList<>();
	
	/**
	 * 模拟数据库查询数据
	 * 
	 * @param pagination
	 *            分页对象参数
	 * @return
	 */
	@RequestMapping("/list")
	public Pagination list(Pagination pagination) {
		// 开始索引
		int startIndex = pagination.getOffset();
		// 结束索引
		int maxIndex = STORAGE.size();
		// 检索条数
		int counts = pagination.getLimit();
		// 检索结果
		List<Person> rows = new ArrayList<>();
		// 检索关键字
		String keyword = pagination.getSearch();
		if (keyword != null && keyword.length() > 0) {
			for (int i = startIndex; i < maxIndex; i++) {
				if (STORAGE.get(i).getName().contains(keyword)) {
					rows.add(STORAGE.get(i));
				}
				if (rows.size() > counts) {
					break ;
				}
			}
			int total = 0;
			for (int i = 0; i < maxIndex; i++) {
				if (STORAGE.get(i).getName().contains(keyword)) {
					++total;
				}
			}
			pagination.setTotal(total);
		} else {
			for (int i = startIndex; i < maxIndex; i++) {
				rows.add(STORAGE.get(i));
				if (rows.size() > counts) {
					break ;
				}
			}
			pagination.setTotal(STORAGE.size());
		}
		pagination.setRows(rows);
		return pagination;
	}

	static {
		for (int i = 1; i <= 10000; i++) {
			Person person = new Person();
			person.setCreateTime(new Date());
			person.setEmail("user-" + i + "@163.com");
			person.setId(i);
			person.setName("user-" + i);
			STORAGE.add(person);
		}
	}

	public static class Person {

		private int id;

		private String name;

		private String email;

		private Date createTime;

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public Date getCreateTime() {
			return createTime;
		}

		public void setCreateTime(Date createTime) {
			this.createTime = createTime;
		}

		@Override
		public String toString() {
			return "Person [id=" + id + ", name=" + name + ", email=" + email + ", createTime=" + createTime + "]";
		}

	}

	public static class Pagination {

		// 查询结果的总行数
		private long total;

		// 当前页的行对象列表
		private List<?> rows;

		// 每页显示的行数
		private int limit;

		// 起始索引的数值
		private int offset;

		// 排序字段名称
		private String sort;

		// 排序, ASC, DESC
		private String order;

		// 检索字符串
		private String search;
		
		// 检索参数
		private Map<String, Object> params;

		public long getTotal() {
			return total;
		}

		public void setTotal(long total) {
			this.total = total;
		}

		public List<?> getRows() {
			return rows;
		}

		public void setRows(List<?> rows) {
			this.rows = rows;
		}

		public int getLimit() {
			return limit;
		}

		public void setLimit(int limit) {
			this.limit = limit;
		}

		public int getOffset() {
			return offset;
		}

		public void setOffset(int offset) {
			this.offset = offset;
		}

		public String getSort() {
			return sort;
		}

		public void setSort(String sort) {
			this.sort = sort;
		}

		public String getOrder() {
			return order;
		}

		public void setOrder(String order) {
			this.order = order;
		}

		public String getSearch() {
			return search;
		}

		public void setSearch(String search) {
			this.search = search;
		}

		public Map<String, Object> getParams() {
			return params;
		}

		public void setParams(Map<String, Object> params) {
			this.params = params;
		}

		@Override
		public String toString() {
			return "Pagination [total=" + total + ", rows=" + rows + ", limit=" + limit + ", offset=" + offset
					+ ", sort=" + sort + ", order=" + order + ", search=" + search + ", params=" + params + "]";
		}

	}

}