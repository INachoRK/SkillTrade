package co.edu.uco.skilltrade.crosscutting.exceptions.messagecatalog;

import co.edu.uco.skilltrade.crosscutting.exceptions.messagecatalog.data.CodigoMensaje;
import co.edu.uco.skilltrade.crosscutting.exceptions.messagecatalog.data.Mensaje;

public interface MessageCatalog {

	void inicializar();

	String obtenerContenidoMensaje(final CodigoMensaje codigo, String... parametros);

	Mensaje obtenerMensaje(final CodigoMensaje codigo, String... parametros);
}