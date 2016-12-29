package org.fanlychie.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by fanlychie on 2016/12/26.
 */
@Controller
@RequestMapping("/fileupload")
public class FileUploadController {

    @RequestMapping
    public @ResponseBody Map<String, Object> upload(@RequestParam("files") MultipartFile[] files) {
        System.out.println(files[0].getOriginalFilename());
        Map<String, Object> map = new HashMap<>();
        map.put("success", true);
        return map;
    }

}
