import re

def get_toc():
    input_file = "../README.md"

    with open(input_file, "r") as file:
        lines = file.readlines()
        toc = lines[25:371]
        contents = lines[371:]

    table_of_contents = {}

    count = 0
    for line in toc:
        match = re.match(r"\|\s\d+\s+\|.*\(#(.*)\)\s+\|$", line)
        if match:
            count += 1
            title = match.group(1)
            table_of_contents[count] = title

    return table_of_contents, toc, contents


def generate_summary():
    def to_summary(m):
        title = m.group(1)
        filename = m.group(2) + ".md"
        return f"-{title}({filename})"

    with open("SUMMARY.md", "w", encoding="utf-8") as sm_file:
        _, toc, _ = get_toc()
        for line in toc:
            res = re.sub(r"^\|\s\d+\s+\|(.*)\(#(.*)\)\s+\|$", to_summary, line)
            res = re.sub(
                r"^\|\s+\|\s\*\*(.*)\*\*.*\|$", lambda m: f"# {m.group(1)}", res
            )
            sm_file.write(res)


def generate_src_files():
    count = 0
    table_of_contents, _, contents = get_toc()

    for idx, line in enumerate(contents):
        if count > len(table_of_contents):
            break

        if match_s := re.match(r"\d+\.\s+(#{3}\s+.*)", line):
            start = idx + 1
            title = match_s.group(1)
            count += 1
            filename = table_of_contents[count] + ".md"

        if match_e := re.search("back to top", line, re.I):
            end = idx

        if match_e:
            with open(filename, "w", encoding="utf-8") as file:
                header = f"{count}. {title}\n"
                file.writelines([header, *contents[start:end]])


def main():
    generate_summary()
    generate_src_files()


if __name__ == "__main__":
    main()
