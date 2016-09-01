import React from 'react';

export default class ShowHideText extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			content: '',
			isExpanded: false,
			expandedContent: this.props.content,
			collapsedContent: this.props.content.substring(0, this.props.charLimit+1)
		}
	}

	toggleContent(){
		this.setState({
				isExpanded : !this.state.isExpanded
		});
	}

	render(){
		let styles = {
			linkDecoration : {
				textDecoration: 'none',
				color: 'blue'
			}
		};

		return(
				<p ref="content">
					{this.state.isExpanded ?
						this.state.expandedContent :
							this.state.collapsedContent
					}
					{this.state.isExpanded ?
						(this.props.allowCollapse ?
							<a href="#" style={styles.linkDecoration} onClick={() => this.toggleContent()}>
								...{this.props.hideText}
							</a> :
								null
						) :
						<a href="#" style={styles.linkDecoration} onClick={() => this.toggleContent()}>
							...{this.props.showText}
						</a>
					}
				</p>
		);
	}
}

ShowHideText.propTypes = {
	content: React.PropTypes.string.isRequired,
	charLimit: React.PropTypes.number,
	allowCollapse: React.PropTypes.bool,
	showText: React.PropTypes.string,
	hideText: React.PropTypes.string
};

ShowHideText.defaultProps = {
	content: "",
	charLimit: 20,
	allowCollapse: false,
	showText: 'show more',
	hideText: 'show less'
};
