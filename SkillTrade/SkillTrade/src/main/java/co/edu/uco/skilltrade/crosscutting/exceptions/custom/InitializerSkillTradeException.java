package co.edu.uco.skilltrade.crosscutting.exceptions.custom;

import co.edu.uco.skilltrade.crosscutting.exceptions.SkillTradeException;
import co.edu.uco.skilltrade.crosscutting.exceptions.enums.Lugar;

public final class InitializerSkillTradeException extends SkillTradeException {

	private static final long serialVersionUID = 1L;
	private static final Lugar lugar = Lugar.INITIALIZER;

	public InitializerSkillTradeException(final String mensajeUsuario) {
		super(mensajeUsuario, lugar);
	}

	public InitializerSkillTradeException(final String mensajeTecnico, final String mensajeUsuario) {
		super(mensajeTecnico, mensajeUsuario, lugar);
	}

	public InitializerSkillTradeException(final String mensajeTecnico, final String mensajeUsuario,
			final Throwable excepcionRaiz) {
		super(mensajeTecnico, mensajeUsuario, lugar, excepcionRaiz);
	}
}
