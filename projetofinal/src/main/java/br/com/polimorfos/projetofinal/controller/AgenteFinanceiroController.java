package br.com.polimorfos.projetofinal.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import br.com.polimorfos.projetofinal.DAO.AgenteFinanceiroDAO;
import br.com.polimorfos.projetofinal.model.AgenteFinanceiro;

@CrossOrigin("*")
@RestController
public class AgenteFinanceiroController {
	   
    @Autowired
    private AgenteFinanceiroDAO dao;

    @GetMapping("/agentes")
    public ResponseEntity<ArrayList<AgenteFinanceiro>> exibirTransacoes(){
    	ArrayList<AgenteFinanceiro>  resposta = (ArrayList<AgenteFinanceiro>) dao.findAll();
        if (resposta.size() == 0) {
            return ResponseEntity.status(404).build();
        }else {
            return ResponseEntity.ok(resposta);
        }
    }
    
}
