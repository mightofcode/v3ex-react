import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import CodeBlock from "@/component/mdArticle/CodeBlock";
import ImgRender from "@/component/mdArticle/ImgRender";

const Wrapper = styled.div`
  .markdown-content {
    color: #000;
    max-width: 48.5rem;
    word-break: break-all;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 500;

      :not(:first-child) {
        margin-top: 0.25rem;
      }

      :not(:last-child) {
        margin-bottom: 0.25rem;
      }

      :last-child {
        margin-bottom: 0;
      }
    }

    h1 {
      line-height: 2rem;
      font-size: 1.25rem;
    }

    h2 {
      line-height: 1.875rem;
      font-size: 1.1875rem;
    }

    h3 {
      line-height: 1.75rem;
      font-size: 1.125rem;
    }

    h4 {
      line-height: 1.625rem;
      font-size: 1rem;
    }

    h5 {
      line-height: 1.5rem;
      font-size: 0.9375rem;
    }

    h6 {
      line-height: 1.375rem;
      font-size: 0.875rem;
    }

    p,
    li {
      max-width: 48.5rem;
      word-break: break-all;
      font-size: 0.875rem;
      line-height: 1.375rem;
    }

    ol,
    ul {
      padding-left: 1.25rem;
    }

    ul {
      list-style-type: disc;
    }

    blockquote {
      margin: 0;
      padding-left: 0.75rem;
      border-left: 4px solid #eee;
    }

    pre {
      margin: 0;
      padding: 0 0.75rem;
      background: #eee !important;
      border-radius: 0.25rem;

      > code {
        padding: 0 !important;
        background: transparent !important;
      }
    }

    code {
      padding: 0 0.25rem;
      background: #eee;
      border-radius: 0.25rem;
    }

    a {
      color: #0974cd;
    }

    img {
      max-width: 100%;
    }
  }
`;

const Markdown = ({ md }) => {
  return (
    <Wrapper>
      <ReactMarkdown
        className="markdown-content"
        source={md}
        renderers={{
          code: CodeBlock,
          image: ImgRender,
        }}
        linkTarget="_blank"
      />
    </Wrapper>
  );
};

export default Markdown;
