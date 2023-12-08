import { render, screen } from "@testing-library-react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Header from "../Header";

describe("Emoji testleri", () => {
  test("başlık kısmı başarılı şekilde render edilmeli", () => {
    render(<Header />);
    title = screen.getByText("Emoji Search");
    expect(title).toBeInTheDocument();
  });

  test("Emoji listesinin başarılı bir şekilde render edilmeli", () => {
    beforeAll(() => {
      render();
    });
  });

  //EmojiFilter
  let emojiFilter;

  beforeEach(() => {
    render(<App />);

    emojiFilter = screen.getByLabelText("emojiInput");
  });

  test("Bir filtreleme işlemi yapıldığında, emoji listesi bu filtreye uygun şekilde yeniden render edilmeli", () => {
    const emoji = "Grinning";
    userEvent.click(emojiFilter, emoji);
    expect(screen.getByText(emoji)).toBeInTheDocument();
  });
});
