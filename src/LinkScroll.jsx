var React = require('react');
var scrollTo = function(to, duration) {
  if(document.body.scrollTop === to) return;
  var diff = to - document.body.scrollTop;
  var steps = duration/10;
  var scrollStep = diff/steps;
  var start = document.scrollingElement.scrollTop;
  var scrollInterval = setInterval(function() {
    if(steps-- > 0) {
      document.body.scrollTop += scrollStep;     
    }
    else {
      document.body.scrollTop = to;
      clearInterval(scrollInterval);
    }
  },10);
};


var LinkScroll = React.createClass({
  handleOnClick: function(e) {
    e.preventDefault();
    var dest = document.getElementById(this.props.href.replace('#',''));
    console.log(this.props.duration);
    scrollTo(dest.offsetTop, this.props.duration || 500);
  },

  render: function() {
    return (
      <a {... this.props} onClick={this.handleOnClick} className={this.props.className}>
        {this.props.children}
      </a>
    );
  }
});

module.exports = LinkScroll;

