var React = require ('react');

var About = (props) =>{
    return (
            <div>
                <div className="header">
                    <h1 className="text-center page-title">About Component</h1>
                </div>
                <p>This is a weather application on React.</p>
                <p>Here are some of the tools i used:</p>
                <ul>
                    <li><a href="https://facebook.github.io/react">React</a></li>-this was the Javascript framweork used.
                    <li><a href="http://openweathermap.org">Open Weather Map</a></li>- I used Open Weather Map to search for Weather Data by city name
                </ul>
            </div>
            )
}

module.exports = About;