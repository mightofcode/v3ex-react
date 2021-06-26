// @ts-nocheck
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ReactMde from "react-mde";
import { Image } from "semantic-ui-react";
import "react-mde/lib/styles/css/react-mde-all.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const StyledTextArea = styled.div<{ visible: boolean; error }>`
  ${(props) =>
    props &&
    !props.visible &&
    css`
      visibility: hidden;
      height: 0 !important;
    `}

  border: 1px solid #dddddd;
  ${(props) =>
    props.error &&
    `
      border-color: #ec4730;
  `}
  border-radius: 0.25rem;
  &:hover,
  &.focused {
    border: 1px solid #b5b5b5;

    ${(props) =>
      props.error &&
      `
      border-color: #ec4730;
  `}
  }

  & > section {
    margin-bottom: 8px;
  }

  textarea {
    color: #000 !important;
    padding: 0.75rem 1rem !important;
    line-height: 1.375 !important;
    outline: none;
    font-size: 0.875rem;
  }

  .mde-tabs {
    display: none !important;
  }

  .react-mde > .mde-header {
    background: white !important;
  }

  .react-mde {
    border: none;
    border-radius: 0.25rem;
    .grip {
      border-top: none;
      color: #e6e6e6;
      .icon {
        margin-bottom: 1rem;
      }
    }

    .mde-header {
      display: flex;
      justify-content: space-between;
      background-color: #ffffff;
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-bottom-color: #e6e6e6;

      .mde-tabs {
        margin: 0 0.5rem;

        button {
          font-weight: 500;
          padding: 0.8rem 1.6rem;
          color: #53595c;
          background: #f7f9fa;
          border-radius: 0.3em;
          border-bottom-color: #ebf0f5;
          margin-bottom: -1px;
          margin-top: 1rem;

          &.selected,
          &:focus {
            background: white;
            color: #2e2f30;
            border-style: solid;
            border-width: 1px;
            border-color: #ebf0f5;
            outline: none;
            border-bottom-color: white;
            margin-bottom: -1px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            margin-top: 1rem;
          }

          &:hover {
            color: #2e2f30;
          }
        }
      }

      .mde-header-group {
        .mde-header-item {
          display: inline-flex;
          align-items: center;

          button {
            color: #777b80;

            &:hover,
            &:active,
            &:focus {
              color: #2e2f30;
            }
          }

          .react-mde-dropdown {
            border-style: solid;
            border-width: 1px;
            border-color: #ebf0f5;
            border-radius: 0.5rem;

            .mde-header-item {
              button {
                p {
                  color: #777b80;
                }

                p:hover {
                  color: #2e2f30;
                }
              }
            }
          }
        }
      }
    }

    .mde-header + div {
      overflow: visible;
    }
  }

  .mde-text {
    border: 1px solid transparent !important;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  ul.mde-suggestions {
    z-index: 999999;
  }
  width: 100%;
`;

const ErrorMsg = styled.div`
  margin-top: 4px;
  font-size: 13px;
  line-height: 16px;
  color: #ec4730;
`;
const MarkdownEditor = ({
  content,
  setContent,
  users = [],
  height = 100,
  visible = true,
  error = null,
}) => {
  const loadSuggestions = async (text) => {
    return new Promise((accept) => {
      const suggestions = (users || [])
        .map((user) => ({
          preview: user,
          value: `[@${user}](/member/${user})`,
        }))
        .filter((i) => i.preview.toLowerCase().includes(text.toLowerCase()));
      accept(suggestions);
    });
  };
  const [focused, setFocused] = useState(false);

  return (
    <Wrapper>
      <StyledTextArea
        className={focused ? "container focused" : "container"}
        visible={visible}
        error={error}
      >
        <ReactMde
          initialEditorHeight={height}
          value={content}
          onChange={(targetValue) => setContent(targetValue)}
          loadSuggestions={loadSuggestions}
          toolbarCommands={[
            [
              "header",
              "bold",
              "italic",
              "quote",
              "ordered-list",
              "unordered-list",
              "link",
              "image",
              "code",
            ],
          ]}
          getIcon={(commandName) => {
            return <Image src={`/md/${commandName}.svg`} />;
          }}
          childProps={{
            textArea: {
              onFocus: () => {
                setFocused(true);
              },
              onBlur: () => {
                setFocused(false);
              },
            },
          }}
        />
      </StyledTextArea>
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </Wrapper>
  );
};
export default MarkdownEditor;
