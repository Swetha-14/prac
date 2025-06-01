import { useState } from "react";

type StarRatingProps = {
    max?: number;
    onChange?: (rating: number) => void;
}



export const StarRating: React.FC<StarRatingProps> = ({ max = 5, onChange }) => {
    const [hovered, setHovered] = useState<number | null>(null)
    const [selected, setSelected] = useState(0)


    return (
        <div style={{ display: "flex", gap: 4 }}>

            {Array.from({ length: max }, (_, i) => {
                const index = i + 1;
                const isFilled = hovered !== null ? index <= hovered : index <= selected

                return (
                    <span
                        key={index}
                        style={{
                            cursor: "pointer",
                            color: isFilled ? "yellow" : "gray",
                            fontSize: 32
                        }}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => {
                            setSelected(index)
                            onChange?.(index)
                        }}
                    >
                        *
                    </span>
                )
            })}

        </div>
    )

}