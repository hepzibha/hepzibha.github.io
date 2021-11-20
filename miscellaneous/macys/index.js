/*Downloaded from https://www.codeseek.co/vanderdrilu/leaderboard-react-XYrOKQ */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { data: [],
      baseurl: "https://www.freecodecamp.org/" };
    return _this;
  }

  _createClass(App, [{
    key: "loadData",
    value: function loadData() {
      var _this2 = this;

      fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime?Origin=*').then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.setState({ data: data });
      }).catch(function (err) {
        return console.error(_this2.props.url, err.toString());
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          data = _state.data,
          baseurl = _state.baseurl;

      return React.createElement(
        "div",
        { className: "App" },
        React.createElement("header", { className: "App-header" }),
        React.createElement(
          "div",
          { className: "container shadowbox" },
          React.createElement(
            "h3",
            { className: " tablecolor boxshadowinset" },
            "Leaderboard"
          ),
          React.createElement(
            "table",
            { "class": " table-hover tablesorter", id: "myTable" },
            React.createElement(
              "thead",
              null,
              React.createElement(
                "tr",
                null,
                React.createElement(
                  "th",
                  null,
                  "#"
                ),
                React.createElement(
                  "th",
                  null,
                  "Campername"
                ),
                React.createElement(
                  "th",
                  null,
                  "Points in past 30 days"
                ),
                React.createElement(
                  "th",
                  null,
                  "All time points "
                )
              )
            ),
            React.createElement(
              "tbody",
              null,
              data.map(function (object, i) {

                var element = data[i];

                var username = element.username;

                var x = 0;
                x = Number(i) + 1;

                var userurl = { baseurl: baseurl } + { username: username };
                return React.createElement(
                  "tr",
                  { key: i },
                  React.createElement(
                    "td",
                    { className: "{sorter: false}" },
                    React.createElement(
                      "p",
                      null,
                      " ",
                      x,
                      " "
                    ),
                    " "
                  ),
                  React.createElement(
                    "td",
                    null,
                    React.createElement("img", { src: element.img, alt: "" }),
                    " ",
                    React.createElement(
                      "a",
                      { href: userurl, target: "_blank" },
                      element.username,
                      "  "
                    )
                  ),
                  React.createElement(
                    "td",
                    null,
                    " ",
                    element.recent
                  ),
                  React.createElement(
                    "td",
                    null,
                    " ",
                    element.alltime
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return App;
}(Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
/*$(document).ready(function () {
            setTimeout(function () {init();},2000);
            function init(){
           
            $.tablesorter.addWidget({
              id: "numbering",
              format: function(table) {
                  var c = table.config;
                  $("tr:visible", table.tBodies[0]).each(function(i) {
                      $(this).find('td').eq(0).text(i + 1);
                  });
              }
            });
            
            $("table").tablesorter({
              // prevent first column from being sortable
              headers: {
                  0: { sorter: false }
              },
              // apply custom widget
              widgets: ['numbering']
            });
            }
            });*/
Comments