package br.com.polimorfos.projetofinal.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="MTB310_ag_financeiro")

public class AgenteFinanceiro {
	
	@Column(name="ID_agente")
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id_agente;
	
	
	@Column(name="nome_agente", length=100, nullable=false)
	private String nome_agente;
	
	@Column(name="volume_transacional", nullable=false)
	private float volume_transacional;

	
    @OneToMany(cascade=CascadeType.ALL,mappedBy="ag_financeiro")
    @JsonIgnoreProperties("ag_financeiro")
    private List<Transaction> transactions;
	
	
	public AgenteFinanceiro() {
		super();
	}

	
	public AgenteFinanceiro(int id_agente, String nome_agente, float volume_transacional,
			List<Transaction> transactions) {
		super();
		this.id_agente = id_agente;
		this.nome_agente = nome_agente;
		this.volume_transacional = volume_transacional;
		this.transactions = transactions;
	}


	public List<Transaction> getTransactions() {
		return transactions;
	}

	public void setTransactions(List<Transaction> transactions) {
		this.transactions = transactions;
	}

	public int getId_agente() {
		return id_agente;
	}

	public void setId_agente(int id_agente) {
		this.id_agente = id_agente;
	}

	public String getNome_agente() {
		return nome_agente;
	}

	public void setNome_agente(String nome_agente) {
		this.nome_agente = nome_agente;
	}

	public float getVolume_transacional() {
		return volume_transacional;
	}

	public void setVolume_transacional(float volume_transacional) {
		this.volume_transacional = volume_transacional;
	}
	
	
}
