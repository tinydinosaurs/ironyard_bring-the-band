import React from 'react';

const Voted = React.createClass({
  render: function() {
    return (
		<section>
      <h2>your favorite bands:</h2>
      <div class="voted-bands">
        <div class="voted-band">
          <h3>band name</h3>
          <img src="" />
        </div>
      </div>
		</section>
    )
  }
});

export default Voted