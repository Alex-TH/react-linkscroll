# react-linkscroll
Creates a Link to another element by id with a smooth transition

##Installation

```
npm install react-linkscroll --save  
```

##Usage
First, import the component:  
```javascript
var LinkScroll = require('react-linkscroll');
```

Then a simple use would look like this:

```html
<LinkScroll href="#to" duration="1000" className="someclass">  
   Link to another element  
</LinkScroll>  
<div id="no_destination">This is not the destination</div>  
<div id="before_destination">We are so close to the destination</div>  
<div id="to">This is the destination!!!</div>  
```
##Props
  + ```href``` The id for the destination element.  
  + ```duration``` The duration of the transition.  

