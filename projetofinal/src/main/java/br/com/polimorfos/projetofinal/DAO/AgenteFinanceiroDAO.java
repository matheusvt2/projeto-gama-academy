package br.com.polimorfos.projetofinal.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.polimorfos.projetofinal.model.AgenteFinanceiro;

public interface AgenteFinanceiroDAO  extends CrudRepository<AgenteFinanceiro, Integer>{
	@Query("SELECT nome_agente,volume_transacional FROM MTB310_ag_financeiro")
	public List<AgenteFinanceiro> findByCategory();
}

