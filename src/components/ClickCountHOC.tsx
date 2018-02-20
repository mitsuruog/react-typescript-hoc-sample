import * as React from "react";

interface ExternalProps {
  style?: React.CSSProperties;
}

export interface InjectedProps {
  clickCount?: number;
}

interface Options {
  debug?: boolean;
}

interface State {
  clickCount: number;
}

export const clickCountHOC = ({ debug = false }: Options = {}) =>
  <OriginalProps extends {}>(WrappedComponent: React.ComponentType<OriginalProps & InjectedProps>) => {

    type ResultProps = OriginalProps & ExternalProps;

    return class ClickCountHOC extends React.Component<ResultProps, State> {

      static displayName = `ClickCountHOC(${WrappedComponent.displayName})`;

      constructor(props: ResultProps) {
        super(props);

        this.state = {
          clickCount: 0,
        };

        this.onClick = this.onClick.bind(this);
      }

      public render(): JSX.Element {
        return (
          <div onClick={this.onClick} style={this.props.style}>
            <span>Clicked {this.state.clickCount} times</span>
            <WrappedComponent {...this.props} {...this.state} />
          </div>
        )
      }

      private onClick() {
        if (debug) {
          console.debug("clicked");
        }
        this.setState({ clickCount: this.state.clickCount + 1 });
      }
    }
  };
