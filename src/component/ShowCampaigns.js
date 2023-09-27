import React from 'react';
import useCampaigns from '../hooks/useCampaign';

function ShowCampaigns(props) {
    const {capaigns} = useCampaigns()
    console.log(capaigns);
    return (
        <div>
            
        </div>
    );
}

export default ShowCampaigns;