import React from 'react';

class CustomLaneHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: this.props.cards,
            totalPrice: 0
        }
    }

    componentDidMount () {
        let counter = 0;
        this.state.cards.forEach((item) => {
            counter += +item.price;
        });
        this.setState({
            totalPrice: counter
        });
    };

    render() {
        let projectsCounter = this.props.cards.length;
       return (
           <header className='d-flex justify-content-between flex-wrap align-items-center mb-4'>
               <div className='text-light'>
                   <h6 className='m-0'>{this.props.title}</h6>
                   <p className='text-secondary m-0'>
                       {projectsCounter >= 1 ? projectsCounter : ('no ')}
                       {projectsCounter <= 1 ? (' project') : (' projects')}
                        <span className="fab fa-github pl-3 pr-3"></span>
                       <span className='text-primary Currency'>{this.state.totalPrice}</span></p>
               </div>
               <span className="fas fa-angle-right text-light"></span>
           </header>
       )
   }
}

export default CustomLaneHeader;