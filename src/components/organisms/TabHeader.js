



const TabHeader = (props) => {
    const { text, selected, to, changeSelected } = props;
  
    return (
      <Div selected={selected} onClick={changeSelected}>
        <Link to={to} style={style}>
          {text}
        </Link>
      </Div>
    );
  };