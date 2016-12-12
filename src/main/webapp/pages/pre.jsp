<script>
$(function() {
	var $row = $('#main-content div.row:nth-child(1)');
	var html = $row.html();
	html = html.replace(/</g,"&lt;");
	html = html.replace(/>/g,"&gt;");
	html = html.replace(/	/g,"    ");
	$row.append('<div class="col-md-6" id="pre-code"><pre style="padding-top:0"></pre></div>');
	$('#pre-code pre').html(html);
	
})
</script>