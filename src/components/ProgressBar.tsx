export interface IItem {
  name: string;
  color: string;
  value: number;
}

interface IProgressBarProps {
  items: IItem[];
  height?: number;
  width?: number;
}

export function ProgressBar({
  items,
  height = 20,
  width = 750,
}: IProgressBarProps) {
  const total = items.reduce((acc, item) => acc + item.value, 0);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
          width,
        }}
      >
        {items.map((item) => {
          return [...Array(Math.ceil(((item.value / total) * width) / 12))].map(
            (_, index) => (
              <div
                key={`${item.name}-${index}`}
                style={{
                  backgroundColor: item.color,
                  height,
                  borderRadius: "3px",
                  width: "100%",
                  marginRight: 2,
                }}
              />
            )
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "10px",
          width,
        }}
      >
        {items.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "black",
              }}
            >
              <div
                style={{
                  height: "12px",
                  width: "12px",
                  backgroundColor: item.color,
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "3px",
                }}
              ></div>
              {item.name}: {item.value} (
              {((item.value / total) * 100).toFixed(2)} %)
            </div>
          );
        })}
      </div>
    </div>
  );
}
