class Rating < ApplicationRecord

    validates :comment, {presence:true}
    validates :review, {presence:true}
    validates :review, numericality: { other_than: 0 }

    belongs_to :song 
    belongs_to :listener 

    def listener_name
        return self.listener.name
    end
end
