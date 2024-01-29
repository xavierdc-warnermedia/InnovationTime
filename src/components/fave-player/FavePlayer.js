import React from "react";

const FavePlayer = () => {
    const id = "player-container";

    createPlayer(id);
    
  return (
    <>
      <div id={id} className="player-container"></div>
      {/* <button onClick={() => {createPlayer(id) }}>CLICK</button> */}
    </>
  );
};

function createPlayer(id) {
        const playerPromise = window.FAVE.player({
            configs: {
                /* Indicates that you would like the player to attempt to autostart. */
                autostart: true,
                
                /* You may provide FreeWheel ad key value pairs, if any, to be used in Freewheel ad requests. */
                freewheel: {
                    keyValuePairs: {
                        key1: 'value1',
                        key2: 'value2'
                    }
                },
    
                /* Whether the content is a live stream */
                isLive: false,
                
                /* The unique ID of the DOM element designated as the container for your FAVE player */
                markupId: 'player-container',
                
                /*
                 * Play content by providing a media ID.
                 * A media ID is used to fetch metadata from the configured server url.
                 */
                mediaId: 'entertainment/2016/12/08/office-christmas-party-aniston-bateman-cnnmoney.cnn'
            }
        });
    
        /* You can get the FAVE player instance from the player promise */
        playerPromise.then(function(favePlayer) {
            /* Do what you would like with the player instance - favePlayer */
        });
}

export default FavePlayer;
