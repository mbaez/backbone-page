/**
 * Define el módulo Page que extiende de Backbone.View. Un Page
 * es un contenedor de alto nivel que contiene multiples views.
 * <br/>
 * Un page cuenta básicamente con 2 estados : <br/>
 * <ul><li>
 *  <b>Open<b> : Cuando el page esta activo y siendo utilizado
 *  todos los eventos se ecuentran asociados al page en este estado.
 * </li>
 * <li>
 *  <b>Close</b> : El page en este estado no cuenta con eventos
 *  asociados.
 * </li> </ul>
 * @author <a href="mailto:mxbg.py@gmail.com.py">Maximiliano Báez</a>
 */
Backbone.Page = Backbone.View.extend({});
_.extend(Backbone.Page.prototype, {
    /**
     * Template del páge, corresponde al layout del page.
     * @field
     * @type String
     *
     * @public
     * @name common.Backbone.Page#template
     */
    template: null,
    /**
     * Este método se encarga de inicializar el page y cargar el
     * template en contenedor correspondiente.
     * @function
     *
     * @public
     * @name common.Backbone.Page#open
     */
    open: function () {
        if (this.template != null) {
            this.$el.html(this.template);
        }
        this.setTitle();
        this.scrollTop();
    },

    /**
     * Este método se encarga de desasociar todos los eventos del
     * page actual.
     * @function
     *
     * @public
     * @name common.Backbone.Page#close
     * @author <a href="mailto:mxbg.py@gmail.com">Maximiliano Báez</a>
     */
    close: function () {
        this.undelegateEvents();
        this.$el.removeData().unbind();
        this.$el.html("");
    },

    /**
     * Se encarga de recargar la página actual cuando una aperación termina con éxito.
     * @function
     *
     * @public
     * @name common.Backbone.Page#reload
     * @author <a href="mailto:mxbg.py@gmail.com">Maximiliano Báez</a>
     */
    reload: function () {
        Backbone.history.loadUrl(Backbone.history.fragment);
    },

    /**
     * Se encarga de hacer un scroll hasta la parte superior de la página.
     * @function
     *
     * @public
     * @name common.Backbone.Page#scrollTop
     * @author <a href="mailto:mxbg.py@gmail.com">Maximiliano Báez</a>
     */
    scrollTop: function () {
        $('html, body').animate({
            scrollTop: 0
        }, 100);
    },

    /**
     * Se encarga de setear el text del tag <title> en el header.
     * @function
     *
     * @private
     * @name common.Backbone.Page#setTitle
     * @author <a href="mailto:mxbg.py@gmail.com">Maximiliano Báez</a>
     */
    setTitle: function () {
        var $title = $(this.$el).find('title');
        var titulo = $title.text();
        $title.remove();
        //si no tiene titulo se añade uno por defecto.
        if (typeof titulo == "undefined" || titulo == null || titulo.length == 0) {
            titulo = "";
        }
        $('title').text(titulo);
        return titulo;
    }
});