package br.com.polimorfos.projetofinal.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
	
	public AgenteFinanceiro() {
		super();
	}

	public AgenteFinanceiro(int id_agente, String nome_agente, float volume_transacional) {
		super();
		this.id_agente = id_agente;
		this.nome_agente = nome_agente;
		this.volume_transacional = volume_transacional;
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
