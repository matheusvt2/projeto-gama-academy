package br.com.polimorfos.projetofinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.polimorfos.projetofinal.DAO.UsuarioDAO;
import br.com.polimorfos.projetofinal.model.Usuario;

@CrossOrigin("*")
@RestController
public class UsuarioController {
   
    @Autowired
    private UsuarioDAO dao;
	
	@PostMapping("/login")
    public ResponseEntity<Usuario> login(@RequestBody Usuario usuario){
		Usuario resposta=null;
		if (usuario.getRacf()==null){
			resposta = dao.findByEmailAndSenha(usuario.getEmail(),usuario.getSenha());
		}else{
			resposta = dao.findByRacfAndSenha(usuario.getRacf(),usuario.getSenha());
		}
        if(resposta == null) {
            return ResponseEntity.status(403).build();
        }
        else {
            return ResponseEntity.ok(resposta);
        }
    }
	
}
