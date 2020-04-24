import iuliia from "../../src/index";

const cases = [
    [
        "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
        "Yuliya, sesh esche etikh myagkikh frantsuzskikh bulok iz Ioshkar-Oly, da vypei altaiskogo chayu",
    ],
];

test.each(cases)("%#: %s", (source, expected) => {
    expect(iuliia.translate(source, iuliia.YANDEX_MONEY)).toBe(expected);
});
