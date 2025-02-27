package co.edu.uco.skilltrade.crosscutting.exceptions.custom;

import co.edu.uco.skilltrade.crosscutting.exceptions.SkillTradeException;
import co.edu.uco.skilltrade.crosscutting.exceptions.enums.Lugar;

public final class ControllerSkillTradeException extends SkillTradeException {

	private static final long serialVersionUID = 1L;
	private static final Lugar lugar = Lugar.CONTROLLER;

	public ControllerSkillTradeException(final String mensajeUsuario) {
		super(mensajeUsuario, lugar);
	}

	public ControllerSkillTradeException(final String mensajeTecnico, final String mensajeUsuario) {
		super(mensajeTecnico, mensajeUsuario, lugar);
	}

	public ControllerSkillTradeException(final String mensajeTecnico, final String mensajeUsuario,
			final Throwable excepcionRaiz) {
		super(mensajeTecnico, mensajeUsuario, lugar, excepcionRaiz);
	}
}
