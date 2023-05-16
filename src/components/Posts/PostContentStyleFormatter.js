function PostContentStyleFormatter({ fullText }) {
  // Split the text into paragraphs using the period (.) as the delimiter
  const paragraphs = fullText.split("\n");
  // Create a variable to store the JSX markup
  const jsxMarkup = [];
  // Wrap each paragraph in JSX <p> tags
  for (let i = 0; i < paragraphs.length; i++) {
    // Trim any leading or trailing whitespace
    const paragraph = paragraphs[i].trim();

    // Add the paragraph wrapped in <p> tags to the JSX markup
    if (paragraph !== "") {
      jsxMarkup.push(<p key={i}>{paragraph}</p>);
      jsxMarkup.push(<p></p>);
    }
  }
  // Return the JSX markup
  return <>{jsxMarkup}</>;
}

export default PostContentStyleFormatter;
