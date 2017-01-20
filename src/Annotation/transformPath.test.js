import transformPath from "./transformPath"

it("transforms path", () => {
  // identity
  expect(transformPath("M2,3", [1, 0, 0, 1, 0, 0])).toBe("M2,3")
  // translation
  expect(transformPath("M2,3", [1, 0, 0, 1, 2, 2])).toBe("M4,5")
  // scale
  expect(transformPath("M2,3", [2, 0, 0, 2, 0, 0])).toBe("M4,6")

  expect(transformPath("M2,3 L1,20", [1, 0, 0, 1, 2, 2])).toBe("M4,5 L3,22")
  expect(transformPath("M2, 3 L1 , 20 Z", [1, 0, 0, 1, 2, 2])).toBe("M4,5 L3,22 Z")
  expect(transformPath("M2,3 l1,20 Z", [1, 0, 0, 1, 2, 2])).toBe("M4,5 l3,22 Z")
})
