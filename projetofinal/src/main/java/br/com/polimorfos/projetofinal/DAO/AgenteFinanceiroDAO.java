package br.com.polimorfos.projetofinal.DAO;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;

import br.com.polimorfos.projetofinal.model.AgenteFinanceiro;

public interface AgenteFinanceiroDAO  extends CrudRepository<AgenteFinanceiro, Integer>{
	public ArrayList<AgenteFinanceiro> findByNome_agente(String nome_agente);
}