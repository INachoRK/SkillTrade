package co.edu.uco.skilltrade.crosscutting.helpers;

public final class ObjectHelper {

	private static final ObjectHelper instance = new ObjectHelper();
	
	private ObjectHelper() {
		super();
	}
	
	public static final ObjectHelper getObjectHelper() {
		return instance;
	}
	
	public final <T> boolean isNUll(T object) {
		return object == null;
	}
	
	public final <T> T getDefault(final T object, final T defaultObject) {
		return isNUll(object) ? defaultObject : object;
	}
	
}
					