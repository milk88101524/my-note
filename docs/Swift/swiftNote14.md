---
sidebar_label: "Enum"
sidebar_position: 14
---

# enum

---

在 Swift 中，`enum` 是一種定義一組相關值的類型，這些值是預先定義的，並且在這組值之外不會有其他的值。`enum` 在 Swift 中非常強大，並且可以擁有關聯值和原始值

## 基本 Enum

這是 Swift 中 `enum` 的基本定義

```
enum Direction {
    case north
    case south
    case east
    case west
}
```

可以這樣使用 `enum`

```
var currentDirection = Direction.north

currentDirection = .east
```

## Switch 語句與 Enum

可以使用 `switch` 語句來處理 `enum` 的每個可能值

```
switch currentDirection {
case .north:
    print("Heading north")
case .south:
    print("Heading south")
case .east:
    print("Heading east")
case .west:
    print("Heading west")
}
```

## 關聯值

Swift 中的 `enum` 可以存儲關聯值，這意味著每個 `enum` 值可以與不同類型的數據相關聯

```
enum Barcode {
    case upc(Int, Int, Int, Int)
    case qrCode(String)
}

var productBarcode = Barcode.upc(8, 85909, 51226, 3)
productBarcode = .qrCode("ABCDEFGHIJKLMNOP")
```

可以使用 `switch` 語句來處理這些關聯值

```
switch productBarcode {
case .upc(let numberSystem, let manufacturer, let product, let check):
    print("UPC: \(numberSystem), \(manufacturer), \(product), \(check)")
case .qrCode(let code):
    print("QR code: \(code)")
}
```

## 原始值

`enum` 還可以存儲原始值。這些原始值可以是整數、浮點數、字符串或其他原始數據類型

```
enum CompassPoint: String {
    case north = "N"
    case south = "S"
    case east = "E"
    case west = "W"
}

let direction = CompassPoint.north
print("Direction: \(direction.rawValue)")
```

也可以使用整數作為原始值

```
enum Planet: Int {
    case mercury = 1
    case venus
    case earth
    case mars
}

let planet = Planet.earth
print("Planet number: \(planet.rawValue)")
```

## 使用原始值初始化 Enum

可以使用原始值來初始化 `enum` 實例

```
let possiblePlanet = Planet(rawValue: 3)
print(possiblePlanet)  // Optional(Planet.earth)
```

## Enum 的方法

可以在 `enum` 中定義方法

```
enum Direction {
    case north
    case south
    case east
    case west
    
    func description() -> String {
        switch self {
        case .north:
            return "North"
        case .south:
            return "South"
        case .east:
            return "East"
        case .west:
            return "West"
        }
    }
}

let direction = Direction.west
print(direction.description())  // 打印 "West"
```

## Mutating 方法

如果 `enum` 是值類型（大多數情況下是這樣），並且想要在方法中修改它，需要使用 `mutating` 關鍵字

```
enum Direction {
    case north
    case south
    case east
    case west
    
    mutating func turnClockwise() {
        switch self {
        case .north:
            self = .east
        case .east:
            self = .south
        case .south:
            self = .west
        case .west:
            self = .north
        }
    }
}

var direction = Direction.north
direction.turnClockwise()
print(direction)  // east
```

## 讓 enum 變成 array 的 CaseIterable & allCases

CaseIterable 是 protocol，遵從 protocol 將讓型別具有 protocol 的相關功能

```
enum Direction: String, CaseIterable {
    case north
    case south
    case east
    case west
}
```

使用 `CaseIterable` 後就可以把 `Direction` 變成陣列，再用 `.allCases` 就可以取出值來