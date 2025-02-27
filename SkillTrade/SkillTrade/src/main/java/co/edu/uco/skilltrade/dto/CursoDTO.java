package co.edu.uco.skilltrade.dto;

import java.util.UUID;

import co.edu.uco.skilltrade.crosscutting.helpers.NumericHelper;
import co.edu.uco.skilltrade.crosscutting.helpers.TextHelper;

public final class CursoDTO {
	
	private int id;
	private String titulo;
	private String descripcion;
	private String categoria;
	
	public CursoDTO() {
		setId(NumericHelper.ZERO);
		setTitulo(TextHelper.EMPTY);
		setDescripcion(TextHelper.EMPTY);
		setCategoria(TextHelper.EMPTY);
	}
	
	public CursoDTO(int id, String titulo, String descripcion, String categoria) {
		setId(id);
		setTitulo(titulo);
		setDescripcion(descripcion);
		setCategoria(categoria);
	}
	
	private final CursoDTO setId(final int id) {
		this.id = id;
		return this;
	}
	
	public static final CursoDTO build() {
		return new CursoDTO();
	}
	
	private final CursoDTO setTitulo(String titulo) {
		this.titulo = TextHelper.applyTrim(titulo);
		return this;
	}
	
	private final void setDescripcion(String descripcion) {
		this.descripcion = TextHelper.applyTrim(descripcion);
	}
	
	private final void setCategoria(String categoria) {
		this.categoria = TextHelper.applyTrim(categoria);
	}
	
	public final int getId() {
		return id;
	}
	
	public final String getTitulo() {
		return titulo;
	}
	
	public final String getDescripcion() {
		return descripcion;
	}
	
	public final String getCategoria() {
		return categoria;
	}
	
}

