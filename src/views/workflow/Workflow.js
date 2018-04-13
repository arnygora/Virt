import React from 'react';
import Board from 'react-trello';
import CustomCard from './CustomCard';
import CustomLaneHeader from './CustomHeader';
import Select from '../../atoms/Select';

import './workflow.css';

//config
import workflowData from './workflowData';

class Workflow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultData: workflowData,
            computedData: workflowData,
        };
    }

    projectFilter = (e) => {
        let company = e.target.value;
        let projects = {...this.state.defaultData};
        if(company !== 'All') {
            projects = {
                lanes: workflowData.lanes.map(item => ({
                    ...item,
                    cards: item.cards.filter(card => card.site === company)
                }))
            };
        }
        this.setState({computedData: projects});
    };

    // shouldReceiveNewData  = (props) => {
    //     this.setState(prevState => ({ totalPrice: prevState.counter }))
    // };

        // if (company === 'Microsoft') {
        //     let copy = {...projects};
        //     copy.lanes.forEach((item )=>{
        //         item.cards = item.cards.filter((card) => {
        //             return card.site === 'Microsoft'
        //         })
        //     });
        //     this.setState({projects: [...this.state.projects, copy]});
        // }
        // if (company === 'Google') {
        //     let copy = {...projects};
        //     copy.lanes.forEach((item )=>{
        //         item.cards = item.cards.filter((card) => {
        //             return card.site === 'Google'
        //         })
        //     });
        //     this.setState({projects: [...this.state.projects, copy]});
        // }
        // if (company === 'Facebook') {
        //     let copy = {...projects};
        //     copy.lanes.forEach((item )=>{
        //         item.cards = item.cards.filter((card) => {
        //             return card.site === 'Facebook'
        //         })
        //     });
        //     this.setState({projects: [...this.state.projects, copy]});
        //     console.log(this.state.projects)
        // }
        //
        // if (company === 'All') {
        //     this.setState({
        //         projects: projects,
        //     });
        // }

    render() {
        let dataSelect = [ 'All', 'Symo.com', 'Microsoft', 'Google', 'Facebook' ],
            label = ['Show projects'],
            cardsCounter = 0;

            this.state.computedData.lanes.forEach(item => {
                cardsCounter += item.cards.length
            });
        return(
            <section>
                <div className="ProjectsHeader">
                    <p className='text-dark m-0'>All projects ({cardsCounter})
                    <span className='text-light font-weight-bold pl-5'>Workflow</span></p>
                    <Select data={dataSelect} label={label} onChange={this.projectFilter}>
                    </Select>
                </div>
                <Board data={this.state.computedData}
                       draggable
                       customCardLayout
                       customLaneHeader={<CustomLaneHeader />}
                       // onDataChange={this.shouldReceiveNewData }
                       className={'Trello'}
                       style={{backgroundColor: 'transparent'}}>
                    <CustomCard />
                </Board>
            </section>
        )
    }
}

export default Workflow;