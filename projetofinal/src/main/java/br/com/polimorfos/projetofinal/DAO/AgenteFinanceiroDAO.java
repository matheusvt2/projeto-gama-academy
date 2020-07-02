package br.com.polimorfos.projetofinal.DAO;

import org.springframework.data.repository.CrudRepository;

import br.com.polimorfos.projetofinal.model.AgenteFinanceiro;

public interface AgenteFinanceiroDAO  extends CrudRepository<AgenteFinanceiro, Integer>{
}