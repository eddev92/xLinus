export class CoreConstants {

       public static APP_MOCK = true;

       public static APP_REST =  '';

       public static BASE_URL = location.protocol + '//' +
                            location.hostname +
                            (location.port ? (':' + location.port) : '') + '/';

    public static URL_MOCK = 'assets/mocks/';

      public static API_REST = CoreConstants.APP_MOCK ?
                                  CoreConstants.BASE_URL + CoreConstants.URL_MOCK :
                                  CoreConstants.APP_REST;

}