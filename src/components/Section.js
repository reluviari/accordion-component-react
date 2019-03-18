import React from 'react';
 
class Section extends React.Component {
 
    constructor(props) {
        super(props);
 
        this.state = {
            open: false,
            className: 'accordion-content accordion-close',
            headingClassName: 'accordion-heading'
        };
 
        this.handleClick = this.handleClick.bind(this);
    }
 
    /*
    * Handling the click event
    */
    handleClick() {
        const { open } = this.state;
        if (open) {
            this.setState({
                open: false,
                className: "accordion-content accordion-close",
                headingClassName: "accordion-heading"
            });
        } else {
            this.setState({
                open: true,
                className: "accordion-content accordion-open",
                headingClassName: "accordion-heading clicked"
            });
        }
    }
 
    /*
    * Ceating the single accordion here.
    */
    render() {
 
        /*
        * Using destructuring to extract the 'error' from state.
        */
        const post = this.props.post;
        const { className } = this.state;
        const { headingClassName } = this.state;
        
        return (
            <div className="parent-accordion">
                <div className={headingClassName} onClick={this.handleClick}>
                    {post.title}
                </div>
                <div className={className}>
                    {post.body}
                </div>
            </div>
        );
    }
 
}
 
export default Section;