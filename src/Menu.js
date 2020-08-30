import React from 'react';

class Menu extends React.Component {

    state = {
        activePage: this.props.activePage, 
        pages: [
            {id: 0, title: "Sliders", url: "/"}, 
            {id: 1, title: "Stats", url: "/stats"}, 
            {id: 2, title: "Settings", url: "/settings"}
        ]
    };
    
    render() {
        const pages = this.state.pages.map((page) => {
            const className = (page.title === this.state.activePage) ? "active item" : "item";
            return <a key={page.id} className={className} href={page.url}>{page.title}</a>
        });

        return (
            <div className="ui three item menu">
                {pages}
            </div>
        );
    }
};

export default Menu;