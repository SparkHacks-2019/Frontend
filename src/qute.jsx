class App extends React.Component {
    state = {
       quote: 'Blah Blah blah 1', 'qharwnkn' , '12414'
      
    }
  
    handleClick = () => {
        this.setState({
           quote: 'new quote',
        }); //new quote
    }
  
    render(){
      return(
        <div>
          <blockquote>
            {this.state.quote}
            <footer>{this.state.author}</footer>
          </blockquote>
          <button onClick={this.handleClick}>new quote</button>
        </div>
      );
    }
  }