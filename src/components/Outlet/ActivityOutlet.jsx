import React from 'react';
import { activityCardData } from '../../api'; 
import { Activity } from '../Common/Activity';
import{ handleHeading} from '../../api'; 
import HeadingLayout from '../Common/HeadingLayout';

const ActivityOutlet = () => {
    return (
        <>
        <div className="layout-max-width p-160 mx-auto padding-md p-sm-60">
        <div className="container-fluid" >
                
                <div className="row">
                    <div className="col-md-8 col-sm-12 col-lg-8 d-flex flex-column gap-1">
                    <HeadingLayout id="1" handleHeading={handleHeading} />
                    </div>
                </div> 
                <div className="row gap-20">
                    {activityCardData.map(item => (
                        <Activity
                            key={item.id}
                            card_description={item.description}
                            card_title={item.title}
                            card_image={item.card_image}
                        />
                    ))}
                </div>
                </div>
              
            </div>
        
            
        </>
    );
}

export default ActivityOutlet;
