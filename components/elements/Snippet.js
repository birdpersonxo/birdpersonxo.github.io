import React from 'react';
import {Highlight, themes} from "prism-react-renderer";

const Snippet = ({codeBlock}) => {
    return (
      <div className="element-snippet">
        <Highlight
            theme={themes.vsDark}
            code={codeBlock}
            language="tsx"
        >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre style={style}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line })}>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token })} />
            ))}
          </div>
        ))}
      </pre>
    )}

        </Highlight>
        </div>
    )

}

export default Snippet;