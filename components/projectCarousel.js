import styled, { keyframes } from "styled-components";
import { device } from "./devices";
import SG from "./SG (3).png"

const type = keyframes`
    from { 
        width: 0; 
        opacity: 1;
    } 
    to { 
        width: 30em; 
        opacity: 1;
    }
`;

const ProjectTitles = styled.h1`
font-family: 'Rubik Mono One', sans-serif;
margin-left: 2.4em;
padding-top: 8em;
vertical-align: bottom;
text-transform: uppercase;
font-size: 2em;
color: #f5f5f5;
text-shadow: 2px 2px #2fbf71;
overflow: hidden;
white-space: nowrap;
animation: ${type} 6s steps(80, end);
@media ${device.tablet} {
  font-size: 1em;
  padding-top: 4em;
	margin-left: 2em;
	text-shadow: 1px 1px #2fbf71;
}
`;

const ProjectDescription = styled.p`
  font-family: "Rajdhani", sans-serif;
  font-size: 1.4em;
  color: #f5f5f5;
  margin-top: 2em;
  text-align: left;
  padding-left: 3.5em;
  padding-right: 1.4em;
  @media ${device.tablet} {
    font-size: 1em;
    padding-left: 2em;
    padding-right: 0.8em;
  }
`;

const Link = styled.a`
  color: #f5f5f5;
  &:hover {
    color: lightgrey;
  }
`;

const Page = styled.div`
width: 100vw;
height: 100vh;
margin-top: -6%;
padding: 0;
position: relative;
animation: fadeIn 500ms ease-in-out forwards;
`;

const Wrapper = styled.section`
// background: url('${SG}') left 50% top 20%/35% no-repeat;
width: 100%;
height: 100vh;
// background-size: 60%;
// background-repeat: no-repeat;
transition: background 500ms ease-in-out;
`
const SelectorsDiv = styled.div`
position: absolute;
top: 0;
transform: translateY(-20%);
left: 0;
width: 30px;
background: rgba(0, 0, 0, 0.1);
height: 160vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 1;
@media ${device.tablet} {
  margin-top: 14%;
}
`

const SelectorDiv = styled.div`
border: 1px solid #fff;
background: none;
width: 11px;
height: 11px;
border-radius: 50%;
margin: 5px 0;
opacity: 0.6;
cursor: pointer;
transition: background .3s ease-in-out, opacity .3s ease-in-out;
&:hover,
&.active {
  background: white;
  opacity: 0.9;
}
`

const PanelDiv = styled.aside`
width: 40vw;
margin-top: -470px;
z-index: 2;
height: 110%;
opacity: 0.9;
color: #fff;
box-shadow: 5px 0 25px 0 rgba(0, 0, 0, 0.2);
transition: background 500ms ease-in-out;
@media ${device.tablet} {
  width: 100vw;
  margin-top: 10%;
  height: 90%;
}
`

const PanelButton = styled.button`
margin: 1.3rem 5rem;
padding: 0.8em 1.3em;
background: none;
border: 1px solid #fff;
font-family: "Rubik Mono One", sans-serif;
font-size: 1rem;
color: #fff;
cursor: pointer;
text-transform: uppercase;
transition: box-shadow 0.5s ease-in-out, color 0.5s ease-in-out;
&:hover {
  box-shadow: inset 0 0 1.5em 1.5em #fff;
  color: rgba(216, 17, 89);
}
&:focus {
  outline: none;
}
@media ${device.tablet} {
  font-size: 0.6rem;
  padding: 0.8em 0.8em;
}
`

class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeID: 0,
      component: this.props.slideData[0].component,
      wrapperStyle: {
        background: `url('${this.props.slideData[0].img}`
      },
			panelStyle: {
				background: `${this.props.slideData[0].color}`
			},
			buttonHover: false,
			buttonStyle: {
				color: '#ffffff'
			}
		};
	}
	_changeActive(id) {
		this.setState({
			activeID: id,
      component: this.props.slideData[id].component,
      wrapperStyle: {
				background: `url('${this.props.slideData[id].img}`
      },
			panelStyle: {
				backgroundColor: `${this.props.slideData[id].color}`
			}
		});
	}
	_buttonColour() {
		if(!this.state.buttonHover){
			this.setState({
				buttonHover: true,
				buttonStyle: {
					color: this.props.slideData[this.state.activeID].colour
				}
			});
		} else {
			this.setState({
				buttonHover: false,
				buttonStyle: {
					color: '#ffffff'
				}
			});
		}
	}
	render() {
		return (
      <Page>
      <Wrapper style={this.state.wrapperStyle}>
{this.state.component}
				<Selectors 
					slideData={this.props.slideData}
					activeID={this.state.activeID}
					_changeActive={this._changeActive.bind(this)}
				/>
  
				<Panel 
					slideData={this.props.slideData[this.state.activeID]}
					panelStyle={this.state.panelStyle}
					buttonStyle={this.state.buttonStyle}
					_buttonColour={this._buttonColour.bind(this)}
				/> 
              
			</Wrapper>
      </Page>
		);
	}
}

class Panel extends React.Component {
	render() {
		return (
			<PanelDiv style={this.props.panelStyle}>
      <Link
                href={this.props.slideData.src}
                target="_blank"
                rel="noopener noreferrer"
      >
				<ProjectTitles>{this.props.slideData.headline}</ProjectTitles></Link>
				<ProjectDescription>{this.props.slideData.description}</ProjectDescription>
				<PanelButton
					style={this.props.buttonStyle}
					onMouseEnter={this.props._buttonColour}
					onMouseLeave={this.props._buttonColour}>
					Read More
				</PanelButton>
			</PanelDiv>
		);
	}
}
class Selectors extends React.Component {
	_handleClick(e) {
		if (this.props.id !== this.props.activeID) {
			this.props._changeActive(this.props.id);
		} else {
			return;
		}
	}
	render() {
		return (
			<SelectorsDiv>
				{this.props.slideData.map((item) => 
					<Selector 
						key={item.id}
						id={item.id}
						_handleClick={this._handleClick}
						_changeActive={this.props._changeActive}
						activeID={this.props.activeID}
					/>
				)}
			</SelectorsDiv>
		);
	}
}
class Selector extends React.Component {
	render() {
		let componentClass = 'selector';
		if (this.props.activeID === this.props.id) {
			componentClass = 'selector active';
		}
		return (
			<SelectorDiv className={componentClass} onClick={this.props._handleClick.bind(this)}></SelectorDiv>
		);
	}
}

export default Slider;
