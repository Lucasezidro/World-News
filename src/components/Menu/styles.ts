import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32 0 12 32px;
  border-bottom: 1px solid var(--gray-700);

  .logo {
    width: 180px;
    margin-left: 50px;
  }

  .responsive-menu {
    display: none;
  }

  ul {
    display: flex;
    gap: 24px;
    margin-right: 220px;

    li {
      list-style: none;

      a {
        text-decoration: none;
        color: var(--pink-400);
        font-weight: bold;
        font-size: 18px;
        transition: all 0.5s;

        &:hover {
          color: var(--pink-200);
        }
      }
    }
  }

  @media (max-width: 414px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;

    .logo {
      width: 120px;
    }

    .responsive-menu {
      display: flex;
      align-items: end;
      position: absolute;
      left: 850px;

      button {
        width: 80px;
        height: 50px;
        background: transparent;
        border: none;
        color: var(--gray-100);
        font-size: 50px;
      }
    }

    ul {
      display: none;
    }
  }
`
