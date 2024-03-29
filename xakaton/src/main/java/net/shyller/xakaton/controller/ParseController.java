package net.shyller.xakaton.controller;

import lombok.AllArgsConstructor;
import lombok.ToString;
import net.shyller.xakaton.Pars.TenderPro;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@AllArgsConstructor
@RequestMapping("parse")
public class ParseController {

  private final TenderPro service;

  @GetMapping("/{searchValue}")
  public ResponseEntity get(@PathVariable("searchValue") String searchValue) {
    final var tender = service.pars_by_word(searchValue) ;

    return ResponseEntity.ok(tender);
  }
  
}
