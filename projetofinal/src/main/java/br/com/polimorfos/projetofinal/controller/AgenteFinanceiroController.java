package br.com.polimorfos.projetofinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import br.com.polimorfos.projetofinal.DAO.AgenteFinanceiroDAO;

@CrossOrigin("*")
@RestController

public class AgenteFinanceiroController {
	   
    @Autowired
    private AgenteFinanceiroDAO dao;

    @GetMapping("/agentes")
    public ResponseEntity<Usuario> transacoesAgente(@PathVariable int id){
        Usuario resposta = dao.findById(id).orElse(null);
        if (resposta==null) {
            return ResponseEntity.status(404).build();
        }else {
            return ResponseEntity.ok(resposta);
        }
    }
    
}
