import React from "react";
import LinearIndeterminate from "../../Spinner";

class Thumb extends React.Component {
    state = {
      loading: false,
      thumb: undefined,
    };
  
    componentWillReceiveProps(nextProps) {
      if (!nextProps.file) { return; }
  
      this.setState({ loading: true }, () => {
        let reader = new FileReader();
  
        reader.onloadend = () => {
          this.setState({ loading: false, thumb: reader.result });
        };
  
        reader.readAsDataURL(nextProps.file);
      });
    }
  
    render() {
      const { file } = this.props;
      const { loading, thumb } = this.state;
  
      if (!file) { return null; }
  
      if (loading) { return <LinearIndeterminate />; }
  
      return (<img src={thumb}
        alt={file.name}
        className="img-thumbnail mt-2"
        height={250}
        width={250} />);
    }
  }
export default Thumb;