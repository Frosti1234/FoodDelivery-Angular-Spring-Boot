package com.mar.fooddelivery.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@RequestMapping("/statistics")
public interface StatisticsRest {
    @GetMapping("/details")
    public ResponseEntity<Map<String, Object>> getCount();
}