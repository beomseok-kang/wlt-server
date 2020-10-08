import Link from "next/link";
import styled from "styled-components";
import { getTeamName } from "../../../lib/funcLib";
import { MdNavigateBefore } from "react-icons/md";

/** The height of this block is important because it affects
 * the position of the chat blocks. The height of room header
 * should always taken into account in order to get correct
 * value of left and top properties of chat blocks.
 */

export const headerHeight = "4rem";

const StyledHeader = styled.header`
  height: ${headerHeight};
  background-color: #343a40;
  display: flex;
  align-items: center;
  span {
    color: #fff;
    margin-left: 2rem;
    font-size: 1.5rem;
  }
  a {
    line-height: 1;
    color: #fff;
    margin-left: 1rem;
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
    padding: 1rem;
    &:hover {
      &::after {
        content: "";
        width: 3rem;
        height: 3rem;
        border-radius: 1.5rem;
        position: absolute;
        top: 0.5rem;
        left: 1.5rem;
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }
`;

function RoomHeaderPresenter({ team }) {
  const teamName = getTeamName(team);
  return (
    <StyledHeader>
      <Link href="/lobby">
        <a>
          <MdNavigateBefore />
        </a>
      </Link>
      <span>#같이 봐요</span>
      <span>#LCK</span>
      <span>#{teamName}</span>
    </StyledHeader>
  );
}

export default RoomHeaderPresenter;
