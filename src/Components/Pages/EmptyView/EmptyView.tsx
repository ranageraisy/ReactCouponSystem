import "./EmptyView.css";

interface EmptyViewProps {
	msg: string;
}

function EmptyView(props: EmptyViewProps): JSX.Element {
    return (
        <div className="EmptyView Box">
            <h2>{props.msg}</h2>
			<img src="https://media.giphy.com/media/OSuaE6AknuRc7syZXp/giphy.gif"/>
        </div>
    );
}

export default EmptyView;