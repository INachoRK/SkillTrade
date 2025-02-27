package co.edu.uco.skilltrade.entity;

import co.edu.uco.skilltrade.crosscutting.helpers.NumericHelper;
import co.edu.uco.skilltrade.crosscutting.helpers.TextHelper;

public final class CursoEntity {
	
	private int id;
	private String titulo;
	private String descripcion;
	private String categoria;
	
	public CursoEntity() {
		setId(NumericHelper.ZERO);
		setTitulo(TextHelper.EMPTY);
		setDescripcion(TextHelper.EMPTY);
		setCategoria(TextHelper.EMPTY);
	}
	
	public CursoEntity(int id, String titulo, String descripcion, String categoria) {
		setId(id);
		setTitulo(titulo);
		setDescripcion(descripcion);
		setCategoria(categoria);
	}
	
	public static final CursoEntity build (final int id, final String titulo, String descripcion, final String categoria) {
		return new CursoEntity(id, titulo, descripcion, categoria);
	}

	public int getId() {
		return id;
	}

	public String getTitulo() {
		return titulo;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	

}
